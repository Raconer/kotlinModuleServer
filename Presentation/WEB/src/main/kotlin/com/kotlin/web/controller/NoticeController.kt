package com.kotlin.web.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping

@Controller
class NoticeController{

    @GetMapping("/noticeTable")
    fun noticeTable() : String{
        System.out.println("Notice")
        return "/notice/table_N"
    }

    @GetMapping("/noticeDiv")
    fun noticeDiv() : String{
        System.out.println("Notice")
        return "/notice/div_N"
    }
}