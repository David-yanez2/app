namespace app.db;

context CELLNEX {
    @cds.persistence.exists
    entity KNA1TEST {
          account_id : Integer;
          account_owner_id : String(10);
          account_balance : Double;
          valid_from : Timestamp not null;
          valid_to : Timestamp not null;
    };
}