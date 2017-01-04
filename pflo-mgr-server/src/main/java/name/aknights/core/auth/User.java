package name.aknights.core.auth;

import java.security.Principal;

public class User implements Principal {

    private final String username;

    public User(String username) {
        this.username = username;
    }

    @Override
    public String getName() {
        return username;
    }
}