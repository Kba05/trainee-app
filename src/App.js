import { Routes, Route} from "react-router-dom";
import { Auth } from "./features/auth/Auth";
import { StartPage } from "./features/startPage/StartPage";
import { TraineePage } from "./features/traineePage/TraineePage"
import { Accaunt } from "./features/traineePage/accaunt/Accaunt"
import { ResumeList } from './features/traineePage/resumeList/ResumeList'
import { Resume } from './features/traineePage/resume/Resume'
import { RequireAuth } from "./features/auth/RequireAuth";
import { ResumeAddForm } from "./features/traineePage/resumeList/ResumeAddForm";
import { Routings }  from './Routes/routes';

function App() {
  return (
    <div className="bg-indigo-50 ">
      <Routes>
          <Route path={Routings.INDEX} element={<StartPage/>}/>
          <Route path={Routings.AUTH} element={<Auth/>}/>
          <Route path={Routings.TRAINEE_PAGE} element={ <RequireAuth> <TraineePage/> </RequireAuth> }>
            <Route path={Routings.ACCAUNT} element={<Accaunt/>}/>
            <Route path={Routings.RESUME_LIST} element={<ResumeList/>}/>
            <Route path={Routings.RESUME_ID} element={<Resume/>}/>
            <Route path={Routings.ADD_RESUME} element={<ResumeAddForm/>}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;