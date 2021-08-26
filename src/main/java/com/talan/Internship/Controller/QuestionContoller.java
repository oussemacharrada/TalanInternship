package com.talan.Internship.Controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpStatusCodeException;

import com.talan.Internship.Model.Question;
import com.talan.Internship.Repository.QuestionRepository;
import com.talan.Internship.responses.MessageResponse;
import com.talan.Internship.serviceImpl.QuestionServiceImpl;


@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class QuestionContoller {
	@Autowired
	private QuestionServiceImpl questionServiceImpl;
	
	
	@GetMapping("/questions")
	public List<Question> getAllQuestions() {
		
			return questionServiceImpl.findAll();
			
		
	}

	@GetMapping("/questions/{id}")
	public Question getQuestionById(@PathVariable("id") Integer id) {
		
			
			return questionServiceImpl.findById(id);
		
	}
	
	
	@PostMapping("/questions")
	public MessageResponse saveQuestion(@RequestBody Question question) {
		return questionServiceImpl.save(question);
	}
	@PutMapping("/questions/{id}")
	public MessageResponse update(@RequestBody Question question) {
		
		return questionServiceImpl.update(question);
			
	}
	
	
	@DeleteMapping("/questions/{id}")
	public MessageResponse delete(@PathVariable("id") Integer id) {
		
		return questionServiceImpl.delete(id);
		
	}
}


