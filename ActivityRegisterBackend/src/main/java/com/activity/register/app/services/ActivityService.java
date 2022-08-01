package com.activity.register.app.services;

import com.activity.register.app.controllers.dtos.ActivityDTO;
import com.activity.register.app.controllers.exceptions.ControledException;
import com.activity.register.app.models.Activity;
import com.activity.register.app.models.Employee;
import com.activity.register.app.repositories.IActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class ActivityService {

    @Autowired
    private IActivityRepository activityRepository;

    @Autowired
    private EmployeeService employeeService;

    public List<Activity> getAll() {
        return activityRepository.findAll();
    }

    public Activity add(ActivityDTO activityDTO) throws ControledException {
        if (activityDTO.getStatus() == Activity.Status.PROCESSING) {
            activityDTO.setDateTimeExecution(new Date());
        }
        if (activityDTO.getDaysLate()==null) {
            activityDTO.setDaysLate(0);
        }

        Employee employee = null;
        if(activityDTO.getEmployeeId() != null) {
            employee = employeeService.getById(activityDTO.getEmployeeId());
        } else {
            throw new ControledException("The employee has not selected.");
        }

        Activity activity = new Activity(activityDTO.getId(), activityDTO.getTitle(), activityDTO.getDescription(),
                activityDTO.getDateTimeExecution(), activityDTO.getDaysLate(), employee, activityDTO.getStatus());

        return activityRepository.save(activity);
    }

    public Activity edit(ActivityDTO activityDTO) throws ControledException {
        if (activityDTO.getStatus() == Activity.Status.PROCESSING && activityDTO.getDateTimeExecution() != null) {
            activityDTO.setDateTimeExecution(new Date());
        }
        if (activityDTO.getDaysLate()==null) {
            activityDTO.setDaysLate(0);
        }

        Employee employee = null;
        if(activityDTO.getEmployeeId() != null) {
            employee = employeeService.getById(activityDTO.getEmployeeId());
        } else {
            throw new ControledException("The employee has not selected.");
        }

        Activity activity = new Activity(activityDTO.getId(), activityDTO.getTitle(), activityDTO.getDescription(),
                activityDTO.getDateTimeExecution(), activityDTO.getDaysLate(), employee, activityDTO.getStatus());

        return activityRepository.save(activity);
    }

    public void deleteById(Long id) {
        activityRepository.deleteById(id);
    }
}
