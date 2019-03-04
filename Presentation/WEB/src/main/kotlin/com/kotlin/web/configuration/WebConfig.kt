package com.kotlin.web.configuration

import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.EnableWebMvc
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer


@Configuration
@EnableWebMvc
class WebConfig : WebMvcConfigurer{
    override fun addResourceHandlers(registry: ResourceHandlerRegistry) {
        registry.addResourceHandler(
                "/JS/**"
            ).addResourceLocations(
            "classpath:/JS/"
        )
    }
}

