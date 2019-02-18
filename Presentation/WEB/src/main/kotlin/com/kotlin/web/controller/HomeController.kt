package com.kotlin.web.controller



import com.kotlin.business.service.MainService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.ui.set
import org.springframework.web.bind.annotation.GetMapping

@Controller
class HomeController{


    @Autowired
    lateinit var mainService: MainService


    @GetMapping("/")
    fun main(model:Model):String{
        System.out.println("Start home / Get Mapping")
        var cnt:Int = mainService.getListCnt()
        System.out.println("cnt : $cnt")
        model["cnt"] = cnt

        return "/main"
    }
}