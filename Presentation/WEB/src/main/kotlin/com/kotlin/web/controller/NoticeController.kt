package com.kotlin.web.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam

@Controller
class NoticeController{

    @GetMapping("/notice")
    fun notice(@RequestParam("id") id :Int) : String{
        System.out.println("Notice : $id")
        val path : String = when(id){
            2 -> "/notice/div_N"
            else -> "/notice/table_N" // 원래는 id 가 1일때
        }

        return path
    }
}