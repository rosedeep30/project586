package backEnd.core.services;

import backEnd.core.models.entities.Blog;
import backEnd.core.services.util.BlogEntryList;
import backEnd.core.models.entities.BlogEntry;
import backEnd.core.services.util.BlogList;

public interface BlogService {

    public BlogEntry createBlogEntry(Long blogId, BlogEntry data);
    public BlogList findAllBlogs();
    public BlogEntryList findAllBlogEntries(Long blogId);
    public Blog findBlog(Long id);
}
