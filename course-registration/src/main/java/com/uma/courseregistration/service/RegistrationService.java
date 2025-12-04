package com.uma.courseregistration.service;

import com.uma.courseregistration.entity.Registration;
import com.uma.courseregistration.repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegistrationService {

    @Autowired
    private RegistrationRepository registrationRepository;

    public Registration saveRegistration(Registration registration) {
        return registrationRepository.save(registration);
    }

    public List<Registration> getAllRegistrations() {
        return registrationRepository.findAll();
    }
    public void deleteRegistration(Long id) {
        registrationRepository.deleteById(id);
    }
    public Registration updateRegistration(Long id, Registration updated) {
        Registration existing = registrationRepository.findById(id).orElse(null);
        if (existing == null) return null;

        existing.setFullName(updated.getFullName());
        existing.setEmail(updated.getEmail());
        existing.setPhone(updated.getPhone());
        existing.setCourseName(updated.getCourseName());
        existing.setExperienceLevel(updated.getExperienceLevel());
        existing.setPreferredBatchDate(updated.getPreferredBatchDate());
        existing.setComments(updated.getComments());

        return registrationRepository.save(existing);
    }


}
