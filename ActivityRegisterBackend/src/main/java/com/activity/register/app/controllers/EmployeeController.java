package com.activity.register.app.controllers;

import com.activity.register.app.models.Employee;
import com.activity.register.app.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("employee")
public class EmployeeController {

    @Autowired
    private EmployeeService EmployeeService;

    @GetMapping("all")
    List<Employee> getAll() {
        return EmployeeService.getAll();
    }

    @PostMapping("add")
    Employee add(@RequestBody Employee Employee) {
        return EmployeeService.save(Employee);
    }
}
