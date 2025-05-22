package au.com.dv.coreconcepts.serverjava;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SecureController {

    @GetMapping("/v1/secure")
    public String secureEndpoint() {
        return "This is a secure endpoint";
    }
}
