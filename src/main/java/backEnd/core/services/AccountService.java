package backEnd.core.services;

import backEnd.core.models.entities.Account;
import backEnd.core.models.entities.Blog;
import backEnd.core.services.util.AccountList;
import backEnd.core.services.util.BlogList;

public interface AccountService {
    public Account findAccount(Long id);
    public Account createAccount(Account data);
    public Blog createBlog(Long accountId, Blog data);
    public BlogList findBlogsByAccount(Long accountId);
    public AccountList findAllAccounts();
    public Account findByAccountName(String name);
}
