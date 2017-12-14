package backEnd.core.services;

import backEnd.core.models.entities.BlogEntry;

public interface BlogEntryService {
    public BlogEntry findBlogEntry(Long id);
    public BlogEntry deleteBlogEntry(Long id);
    public BlogEntry updateBlogEntry(Long id, BlogEntry data);

}
