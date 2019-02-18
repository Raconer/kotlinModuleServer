package com.kotlin.web

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.ComponentScan

@SpringBootApplication
@ComponentScan(basePackages = ["com.kotlin"])
class WebApplication


fun main(args: Array<String>) {

    //SpringApplication.run(WebApplication::class.java, *args)
    runApplication<WebApplication>(*args)
}