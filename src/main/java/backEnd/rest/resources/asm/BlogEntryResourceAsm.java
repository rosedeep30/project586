package backEnd.rest.resources.asm;

import org.springframework.hateoas.Link;
import org.springframework.hateoas.mvc.ResourceAssemblerSupport;
import backEnd.core.models.entities.BlogEntry;
import backEnd.rest.mvc.BlogController;
import backEnd.rest.mvc.BlogEntryController;
import backEnd.rest.resources.BlogEntryResource;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.*;

public class BlogEntryResourceAsm extends ResourceAssemblerSupport<BlogEntry, BlogEntryResource> {

    public BlogEntryResourceAsm()
    {
        super(BlogEntryController.class, BlogEntryResource.class);
    }

    @Override
    public BlogEntryResource toResource(BlogEntry blogEntry) {
        BlogEntryResource res = new BlogEntryResource();
        res.setTitle(blogEntry.getTitle());
        res.setContent(blogEntry.getContent());
        res.setRid(blogEntry.getId());
        Link self = linkTo(BlogEntryController.class).slash(blogEntry.getId()).withSelfRel();
        res.add(self);
        if(blogEntry.getBlog() != null)
        {
            res.add((linkTo(BlogController.class).slash(blogEntry.getBlog().getId()).withRel("blog")));
        }
        return res;
    }
}
