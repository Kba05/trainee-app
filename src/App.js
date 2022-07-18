import { Routes, Route} from "react-router-dom";
import { Auth } from "./features/auth/Auth";
import { StartPage } from "./features/startPage/StartPage";
import { TraineePage } from "./features/traineePage/TraineePage"
import { Accaunt } from "./features/traineePage/accaunt/Accaunt"
import { ResumeList } from './features/traineePage/resumeList/ResumeList'
import { Resume } from './features/traineePage/resume/Resume'
import { RequireAuth } from "./features/auth/RequireAuth";
import { ResumeAddForm } from "./features/traineePage/resumeList/ResumeAddForm";


function App() {
  return (
    <div className="bg-indigo-50 ">
      <Routes>
          <Route path="/" element={<StartPage/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/trainee" element={
              <RequireAuth> 
                <TraineePage/> 
              </RequireAuth>}>
              <Route path='accaunt' element={<Accaunt/>}/>
              <Route path='resumeList' element={<ResumeList/>}/>
              <Route path='resume/:Id' element={<Resume/>}/>
              <Route path='addresume' element={<ResumeAddForm/>}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
