package com.activity.register.app.repositories;

import com.activity.register.app.models.Activity;
import com.activity.register.app.models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IEmployeeRepository extends JpaRepository<Employee, Long> {

}
