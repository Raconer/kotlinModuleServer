package com.kotlin.data.mybatis.config

import org.mybatis.spring.SqlSessionFactoryBean
import org.mybatis.spring.annotation.MapperScan
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.core.io.support.PathMatchingResourcePatternResolver
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer
import java.io.IOException
import javax.sql.DataSource


@Configuration
@MapperScan(value = ["com.kotlin.data.mybatis"])
class DBConfig : WebMvcConfigurer {

    @Bean
    @Throws(IOException::class)
    fun sqlSessionFactoryBean(dataSource: DataSource): SqlSessionFactoryBean {
        val factoryBean = SqlSessionFactoryBean()
        val pathResolver = PathMatchingResourcePatternResolver()

        factoryBean.setDataSource(dataSource)
        factoryBean.setMapperLocations(pathResolver.getResources("classpath:/mapper/*.xml"))

        return factoryBean
    }
}