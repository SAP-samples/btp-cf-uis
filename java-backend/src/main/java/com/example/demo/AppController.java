package com.example.demo;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@CrossOrigin
public class AppController {

    @Value("${app.dark-mode:false}")
    private boolean darkMode;

    private final StringHttpMessageConverter stringHttpMessageConverter;

    public AppController(StringHttpMessageConverter stringHttpMessageConverter) {
        this.stringHttpMessageConverter = stringHttpMessageConverter;
    }

    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("darkMode", darkMode);
        return "index";
    }

    @GetMapping("/api/hello")
    @ResponseBody
    public String hello() {
        return "Hello from the backend!";
    }

    @GetMapping("/api/error")
    @ResponseBody
    public String error() {
        String errorMessage = "This is an error endpoint which sends an error to your Logs in BTP Cloud Foundry";
        System.err.println(new Exception(errorMessage));
        return errorMessage;
    }
}
