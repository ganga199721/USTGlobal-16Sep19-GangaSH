package com.ustglobal.springmvc.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttribute;

import com.ustglobal.springmvc.dto.ProductBean;
import com.ustglobal.springmvc.service.ProductService;


@Controller
public class ProductController {
@Autowired
	private ProductService service ;
	
	/*
	 * @InitBinder public void initBinder(WebDataBinder binder) { SimpleDateFormat
	 * format = new SimpleDateFormat("yyyy-MM-dd"); CustomDateEditor editor = new
	 * CustomDateEditor(format,true); binder.registerCustomEditor(Date.class,
	 * editor); }
	 */
	
	@GetMapping("/login")
	public String loginPage() {
		return "login";
	}
	
	@PostMapping("/login")
	public String login(int id,String password, HttpServletRequest request) {
		service.login(id, password);
		ProductBean bean = service.login(id, password);
		if(bean == null) {
			request.setAttribute("msg", "Invalid Credentials");
			return "login";
		}else {
			HttpSession session = request.getSession();
			session.setAttribute("bean", bean);
			return "home";
		}
	}//end of login()
	
	
	
	
	
	@GetMapping("/register")
	public String registerPage() {
		return "register";
	}
	
	@PostMapping("/register")
	public String register(ProductBean bean,ModelMap map) {
		
		int check = service.register(bean);
		if(check>0) {
			map.addAttribute("msg", "You are Registered and ID is "+check);
		}else {
			map.addAttribute("msg", "Email is Repeated");
		}
		return "login";
	}//end of register()

	
	@GetMapping("/home")
	public String home(@SessionAttribute(name ="bean",required=false) ProductBean bean,ModelMap map){ 
		if(bean==null) {
			map.addAttribute("msg", "Login First!!!!!");
			return "login";
		}else {
			return "home";
		}
	}//end of home
	
	
	@PostMapping("/home")
	public String home() {
		return "home";
	}//end of home()
	
	
	@GetMapping("/search")
	public String search(@RequestParam("id")int id,ModelMap map) {
		ProductBean bean = service.searchProduct(id);
		if(bean==null) {
			map.addAttribute("msg", "Data Not Found");
		}else {
			map.addAttribute("bean", bean);
		}
		return "home";
	}
	
	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "login";
	}//end of logout
	
	@GetMapping("/delete")
	public String deleteprofile(HttpSession session) {
		ProductBean bean = (ProductBean) session.getAttribute("bean");
		service.retrieve(bean.getId());
		try {
			service.retrieve(bean.getId());
		}catch(Exception e) {
			e.printStackTrace();
		}
		session.invalidate();
		return "login";
	}
	
	@GetMapping("/changepassword")
	public String changePassword(HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		if(session!=null) {
			return "changepassword";
		}else {
			return "login";
		}
	}
	
	@PostMapping("/changepassword")
	public String changepassword(String password, String confirmpassword,@SessionAttribute(name="bean")ProductBean bean, ModelMap map) {
		if(password.equals(confirmpassword)) {
			service.changePassword(bean.getId(), password);
			map.addAttribute("msg", "password Changed");
		}else {
			map.addAttribute("msg", "Password Not Matching");
		}
		return "home";
	}
	
	
}