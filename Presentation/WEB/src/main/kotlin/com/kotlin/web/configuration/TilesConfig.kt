package com.kotlin.web.configuration

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer
import org.springframework.web.servlet.view.tiles3.TilesConfigurer
import org.springframework.web.servlet.view.tiles3.TilesViewResolver


@Configuration
class TilesConfig : WebMvcConfigurer{
    @Bean
    fun tilesConfigurer(): TilesConfigurer {

        val configurer = TilesConfigurer()
        configurer.setDefinitions("/WEB-INF/tiles/tiles.xml")
        configurer.setCheckRefresh(true)
        return configurer
    }

    override fun configureViewResolvers(registry: ViewResolverRegistry) {
        val viewResolver = TilesViewResolver()
        registry.viewResolver(viewResolver)
    }

}