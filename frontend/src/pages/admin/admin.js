import AdminSidePanel from "../../components/AdminSidePanel";
import DataArea from "../../components/DataArea";

function AdminPage(){
    return <div className="fluid-container adminBg">
        <div className="row">
            <div className="col-4">
                <AdminSidePanel/>
            </div>
            <div className="col-8">
                <DataArea/>
            </div>
        </div>
    </div>
}

export default AdminPage;