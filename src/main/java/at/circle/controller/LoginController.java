package at.circle.controller;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import at.circle.pojo.LoginForm;
import at.circle.pojo.Result;


@RestController
public class LoginController {

	@RequestMapping({  "/" })
	public ModelAndView login() {
		String view = "login";
		ModelAndView modelAndView = new ModelAndView(view);
		return modelAndView;
	}

	@RequestMapping("/login")
    public @ResponseBody  Result login(@RequestBody LoginForm loginForm) {
		Result result=Result.convert("ok", "success", "");
		return result;
    }

	@RequestMapping({  "/index" })
	public ModelAndView index() {
		String view = "index";
		ModelAndView modelAndView = new ModelAndView(view);
		return modelAndView;
	}
}
