package backEnd.rest.resources.asm;

import org.springframework.hateoas.mvc.ResourceAssemblerSupport;
import backEnd.core.services.util.AccountList;
import backEnd.rest.mvc.AccountController;
import backEnd.rest.resources.AccountListResource;
import backEnd.rest.resources.AccountResource;

import java.util.List;

public class AccountListResourceAsm extends ResourceAssemblerSupport<AccountList, AccountListResource> {


    public AccountListResourceAsm() {
        super(AccountController.class, AccountListResource.class);
    }

    @Override
    public AccountListResource toResource(AccountList accountList) {
        List<AccountResource> resList = new AccountResourceAsm().toResources(accountList.getAccounts());
        AccountListResource finalRes = new AccountListResource();
        finalRes.setAccounts(resList);
        return finalRes;
    }
}
