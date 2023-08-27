import "./Shortcut.scss";
function Shortcut({ pageTitle }) {
  return (
    <div className="row overflow-hidden mx-0 ">
      <div className="col-6 px-2 overflow-hidden rounded-3 shortcut">
        <img src="/imgs/Shortcut/1.webp" className="h-100 w-100 rounded-3" />
        <p className="shortcut-title">POD SYSTEM</p>
      </div>
      <div className="col-6 px-2 rounded-3 overflow-hidden">
        <div className="row mb-3">
          <div className="col-6 px-2 shortcut">
            <img src="/imgs/Shortcut/2.webp" className="w-100 rounded-3" />
            <p className="shortcut-title">POD SYSTEM</p>
          </div>
          <div className="col-6 px-2 shortcut">
            <img src="/imgs/Shortcut/3.webp" className="w-100 rounded-3" />
            <p className="shortcut-title">POD SYSTEM</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6 px-2 shortcut">
            <img src="/imgs/Shortcut/4.webp" className="w-100 rounded-3" />
            <p className="shortcut-title">POD SYSTEM</p>
          </div>
          <div className="col-6 px-2 shortcut">
            <img src="/imgs/Shortcut/5.webp" className="w-100 rounded-3" />
            <p className="shortcut-title">POD SYSTEM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shortcut;
