package at.circle.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import at.circle.pojo.Result;
import at.circle.pojo.Students;


@RestController
public class SearchStudentController {

	@RequestMapping({  "/search_students" })
	public ModelAndView search_studentsIndex() {
		String view = "search_students";
		ModelAndView modelAndView = new ModelAndView(view);
		return modelAndView;
	}

	@RequestMapping("/getAllStudents")
	public @ResponseBody Result<List<Students>> getAllStudents() {
		List<Students> listStudents = new ArrayList<>();
		Students students = new Students();
		students.setStu_id("1");
		students.setStu_age(10);
		students.setStu_sex(1);
		students.setStu_class("012");
		students.setStu_address("china");
		students.setStu_comment("comment");
		students.setStu_name("xiaoming");
		students.setStu_phone("13111111111");
		students.setStu_qq("888888");
		listStudents.add(students);

		students = new Students();
		students.setStu_id("2");
		students.setStu_age(11);
		students.setStu_sex(0);
		students.setStu_class("012");
		students.setStu_address("china");
		students.setStu_comment("commentxxxxxxxx");
		students.setStu_name("feiyang");
		students.setStu_phone("132222222");
		students.setStu_qq("99999999");
		listStudents.add(students);

		Result<List<Students>> result = Result.convert("ok", "success", listStudents);
		return result;
	}


}
