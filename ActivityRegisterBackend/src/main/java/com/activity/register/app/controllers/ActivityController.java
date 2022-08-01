package com.activity.register.app.controllers;

import com.activity.register.app.controllers.dtos.ActivityDTO;
import com.activity.register.app.controllers.exceptions.ControledException;
import com.activity.register.app.models.Activity;
import com.activity.register.app.services.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;

@RestController
@RequestMapping("activity")
public class ActivityController {

    @Autowired
    private ActivityService activityService;

    @GetMapping("all")
    List<Activity> getAll() {
        return activityService.getAll();
    }

    @GetMapping("statuses")
    Activity.Status[] getstatuses() {
        return Activity.Status.getAll();
    }

    @PostMapping("add")
    Activity add(@RequestBody ActivityDTO activityDTO) throws ControledException {
        return activityService.add(activityDTO);
    }

    @PutMapping("edit/{id}")
    Activity edit(@PathVariable("id") Long id, @RequestBody ActivityDTO activityDTO) throws ControledException {
        activityDTO.setId(id);
        return activityService.edit(activityDTO);
    }

    @DeleteMapping("delete/{id}")
    void deleteById(@PathVariable("id") Long id) {
        activityService.deleteById(id);
    }
}
