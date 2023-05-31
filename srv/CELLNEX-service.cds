using {app.db.CELLNEX as CELLNEX} from '../db/CELLNEX';

service CELLNEX_service @(path : '/CELLNEX') @(requires:'authenticated-user') {
    entity KNA1TEST @(restrict: [{ grant: 'READ', to: 'Viewer' }, { grant: 'WRITE', to: 'Admin' } ]) as select * from CELLNEX.KNA1TEST;
};