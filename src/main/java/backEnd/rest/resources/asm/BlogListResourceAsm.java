package backEnd.rest.resources.asm;

import org.springframework.hateoas.mvc.ResourceAssemblerSupport;
import backEnd.core.services.util.BlogList;
import backEnd.rest.mvc.BlogController;
import backEnd.rest.resources.BlogListResource;

public class BlogListResourceAsm extends ResourceAssemblerSupport<BlogList, BlogListResource> {

    public BlogListResourceAsm()
    {
        super(BlogController.class, BlogListResource.class);
    }

    @Override
    public BlogListResource toResource(BlogList blogList) {
        BlogListResource res = new BlogListResource();
        res.setBlogs(new BlogResourceAsm().toResources(blogList.getBlogs()));
        return res;
    }
}
