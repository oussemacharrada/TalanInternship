package com.talan.Internship.Controller;
        import java.text.DateFormat;
        import java.text.SimpleDateFormat;
        import java.time.LocalDateTime;
        import java.time.format.DateTimeFormatter;
        import java.util.Date;
        import java.util.HashMap;
        import java.util.List;
        import java.util.Map;

        import com.talan.Internship.Model.Category;
        import com.talan.Internship.Repository.CategoryRepository;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.format.datetime.standard.DateTimeFormatterRegistrar;
        import org.springframework.http.ResponseEntity;
        import org.springframework.web.bind.annotation.DeleteMapping;
        import org.springframework.web.bind.annotation.GetMapping;
        import org.springframework.web.bind.annotation.PathVariable;
        import org.springframework.web.bind.annotation.PostMapping;
        import org.springframework.web.bind.annotation.PutMapping;
        import org.springframework.web.bind.annotation.RequestBody;
        import org.springframework.web.bind.annotation.RequestMapping;
        import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/category")
public class CategoryController {

    @Autowired
    CategoryRepository categoryRepository;

    @GetMapping("/get-all-categorys")
    public List<Category> getAllcategory(){
        List<Category> allcategorylist = categoryRepository.findAll();
        return allcategorylist;

    }

    @GetMapping("/get-category/{id}")
    public Category getcategorybyId(@PathVariable(value = "id") Integer categoryId)

    {
        Category Category = categoryRepository.findById(categoryId).get();

        return Category;
    }

    @PostMapping("/create-categorys")
    public Category createcategory(@RequestBody Category category) {

        Date date = new Date();
        String strDateFormat = "yyyy-MM-dd HH:mm:ss";
        DateFormat dateFormat = new SimpleDateFormat(strDateFormat);
        String formattedDate= dateFormat.format(date);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

        LocalDateTime dateTime = LocalDateTime.parse(formattedDate,  DateTimeFormatter.ofPattern ("yyyy-MM-dd HH:mm:ss"));

        category.setCreatedBy("oussema");
        category.setCreatedAt(dateTime);
        category.setModifiedAt(dateTime);
        Category  savedcategory   = categoryRepository.save(category);

        return savedcategory;
    }

    @PutMapping("/update-categorys/{id}")
    public ResponseEntity<Category> updatecategory(@PathVariable(value = "id") Integer categoryId,
                                                   @RequestBody Category categoryDetails) {
        Category category = categoryRepository.findById(categoryId).get();
        Date date = new Date();
        String strDateFormat = "yyyy-MM-dd HH:mm:ss";
        DateFormat dateFormat = new SimpleDateFormat(strDateFormat);
        String formattedDate= dateFormat.format(date);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

        LocalDateTime dateTime = LocalDateTime.parse(formattedDate,  DateTimeFormatter.ofPattern ("yyyy-MM-dd HH:mm:ss"));

        category.setDescription(categoryDetails.getDescription());
        category.setTitle(categoryDetails.getTitle());
        category.setCreatedBy("oussema");

        category.setModifiedAt(dateTime);
        category.setType(categoryDetails.getType());

        final Category updatedcategory = categoryRepository.save(category);
        return ResponseEntity.ok(updatedcategory);
    }

    @DeleteMapping("/delete-categorys/{id}")
    public Map<String, Boolean> deletecategory(@PathVariable(value = "id") Integer categoryId)
    {
        Category category = categoryRepository.findById(categoryId).get();

        categoryRepository.delete(category);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}