package com.kotlin.web.controller



import com.kotlin.business.service.MainService
import com.kotlin.model.Notice
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.ui.set
import org.springframework.web.bind.annotation.GetMapping
import javax.servlet.http.HttpServletRequest


@Controller
class HomeController{


    @Autowired
    lateinit var mainService: MainService


    @GetMapping("/")
    fun main(model:Model, request:HttpServletRequest):String{
        System.out.println("Start home / Get Mapping")
        var cnt:Int = mainService.getListCnt()
        val noticeList: List<Notice> = mainService.getList()

        for(notice in noticeList){
            System.out.println("${notice.toString()}")
        }

        model["cnt"] = cnt
        model["noticeList"] = noticeList

        return "main"
    }
}