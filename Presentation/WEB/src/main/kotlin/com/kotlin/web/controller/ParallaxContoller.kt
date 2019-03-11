package com.kotlin.web.controller

import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.ui.set
import org.springframework.web.bind.annotation.GetMapping
import javax.servlet.http.HttpServletRequest


@Controller
class ParallaxContoller{

    @GetMapping("parallax/basic")
    fun basic(model: Model, request: HttpServletRequest):String{
        model["templateID"] = 1
        return "pBasic"
    }


}