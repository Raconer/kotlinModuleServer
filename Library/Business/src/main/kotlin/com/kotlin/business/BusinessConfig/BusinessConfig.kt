package com.kotlin.business.BusinessConfig

import org.springframework.context.annotation.ComponentScan
import org.springframework.context.annotation.Configuration

@Configuration
@ComponentScan(basePackages = ["com.kotlin.data.mybatis"])
class BusinessConfig{

}