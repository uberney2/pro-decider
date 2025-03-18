import {
  UpdateAccountDto,
  UpdateAccountFullDto,
} from './dto/update-account.dto';
import { AccountWithKeyPeople } from '../../context/Accounts';
import { ShowAllResponse } from './dto/show-all-accounts-response';
import { CreateAccountKeyPeopleDto } from './dto/create-account-keypeople.dto';
import { KeyPeopleWithNotes } from '../../context/KeyPeople';

export class AccountMapper {
  static mapAccountDtoToFullAccountDto(
    accountWithOutId: UpdateAccountDto
  ): UpdateAccountFullDto {
    const fullAccount: UpdateAccountFullDto = {
      id: accountWithOutId.id,
      name: accountWithOutId.name,
      buOwner: accountWithOutId.buOwner,
      portfolio: accountWithOutId.portfolio,
      pcsLink: accountWithOutId.pcsLink,
      salesforceLink: accountWithOutId.salesforceLink,
      status: accountWithOutId.status,
      strategy: accountWithOutId.strategy,
    };
    return fullAccount;
  }

  static createShowAccountsResponse(
    response: Array<AccountWithKeyPeople>
  ): ShowAllResponse[] {
    return response.map((account) => {
      const keyPeopleWithNotes = AccountMapper.assignNoteToKeyPeople(
        account.keyPeople
      );
      return new ShowAllResponse(
        account.id.value,
        account.name.value,
        account.buOwner?.toPrimitives(),
        account.portfolio?.toPrimitives(),
        account.status.value,
        account.salesforceLink?.value,
        account.pcsLink?.value,
        account.strategy?.value,
        keyPeopleWithNotes,
        account.createdAt,
        account.updatedAt
      );
    });
  }

  static assignNoteToKeyPeople(
    keyPeople: Array<KeyPeopleWithNotes>
  ): Array<CreateAccountKeyPeopleDto> {
    return keyPeople.map((keyPeopleWithNote: KeyPeopleWithNotes) => ({
      id: keyPeopleWithNote.id.value,
      name: keyPeopleWithNote.name.value,
      role: keyPeopleWithNote.role?.value,
      email: keyPeopleWithNote.email.value,
      note: keyPeopleWithNote.note?.value,
      createdAt: keyPeopleWithNote.createdAt,
      updatedAt: keyPeopleWithNote.updatedAt,
    }));
  }
}
