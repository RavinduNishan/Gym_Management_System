package com.skillsharing;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.event.EventListener;
import org.springframework.data.mongodb.config.EnableMongoAuditing;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;

// Main application class annotated with @SpringBootApplication
// This annotation combines @Configuration, @EnableAutoConfiguration, and @ComponentScan
@SpringBootApplication
// Enables auditing for MongoDB entities (e.g., automatic timestamps for created/updated fields)
@EnableMongoAuditing
// Specifies the base package to scan for components like controllers, services, repositories, etc.
@ComponentScan(basePackages = {"com.skillsharing"})
public class SkillSharingApplication {

    // Injects RequestMappingHandlerMapping to inspect mapped endpoints (URLs) in the application
    private final RequestMappingHandlerMapping requestMappingHandlerMapping;

    // Injects MongoTemplate to interact with MongoDB
    private final MongoTemplate mongoTemplate;

    // Constructor-based dependency injection for RequestMappingHandlerMapping and MongoTemplate
    public SkillSharingApplication(RequestMappingHandlerMapping requestMappingHandlerMapping, MongoTemplate mongoTemplate) {
        this.requestMappingHandlerMapping = requestMappingHandlerMapping;
        this.mongoTemplate = mongoTemplate;
    }

    // Entry point of the Spring Boot application
    public static void main(String[] args) {
        // Starts the Spring Boot application
        SpringApplication.run(SkillSharingApplication.class, args);
    }

    // Event listener that triggers after the application is fully initialized
    @EventListener
    public void onApplicationEvent(ApplicationReadyEvent event) {
        try {
            // Attempt to connect to MongoDB by fetching collection names
            // This ensures that the application can communicate with the database
            mongoTemplate.getCollectionNames();
            System.out.println("\n=== Successfully connected to MongoDB ===\n");
        } catch (Exception e) {
            // Log an error message if the connection to MongoDB fails
            System.err.println("\n=== Failed to connect to MongoDB: " + e.getMessage() + " ===\n");
        }

        // Print all mapped URLs (endpoints) in the application
        System.out.println("\n=== Mapped URLs ===\n");

        // Iterate through all registered handler methods and their corresponding URL mappings
        requestMappingHandlerMapping.getHandlerMethods().forEach((key, value) -> {
            // Print the mapping details (e.g., URL pattern => Handler method)
            System.out.println(key + " => " + value);
        });

        // End of mapped URLs section
        System.out.println("\n=== End of Mapped URLs ===\n");
    }
}