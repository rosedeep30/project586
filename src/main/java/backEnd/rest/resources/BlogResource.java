package backEnd.rest.resources;

import org.springframework.hateoas.ResourceSupport;
import backEnd.core.models.entities.Blog;

public class BlogResource extends ResourceSupport {

    private String title;

    private Long rid;

    public Long getRid() {
        return rid;
    }

    public void setRid(Long rid) {
        this.rid = rid;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Blog toBlog() {
        Blog blog = new Blog();
        blog.setTitle(title);
        return blog;
    }
}
