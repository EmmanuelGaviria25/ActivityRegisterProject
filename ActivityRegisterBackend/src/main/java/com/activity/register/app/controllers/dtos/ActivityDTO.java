package com.activity.register.app.controllers.dtos;

import com.activity.register.app.models.Activity;
import com.activity.register.app.models.Employee;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ActivityDTO {

    private Long id;

    private String title;

    private String description;

    private Date dateTimeExecution;

    private Integer daysLate;

    private Long employeeId;

    private Activity.Status status;

}
