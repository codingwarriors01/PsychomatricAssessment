import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Test1 from '../Images/test1.png';
import Test4 from '../Images/test4.png';
import Test5 from '../Images/test5.jpg';
import Test6 from '../Images/test6.png';

export default function Section_Result() {
  const [cresult, setCresult] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/resultview')
      .then(res => {
        const data1 = [res.data]
        console.log(res.data)
        setCresult(res.data)

      });
  }, [])

  const renderElement = () => {
    const data2 = cresult.map((dt) => {
      console.log("data3", dt.user_cresult)
      if (dt.user_cresult > 5)
        return <h4 className="text-info">You are good in reasoning, you can go in development.</h4>;

    })
    return data2;

  }

  return (
    <>

      <div class="row pb-3 mt-5">
        <div class="card mb-3 col-md-6" style={{ maxWidth: "540px" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src={Test1} class="img-fluid rounded-start" alt="" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Aptitude Marks</h5>
                <p><strong>Total Question:</strong> 10 </p>

                <p><strong>Correct Answer:</strong>  </p>
                <p><strong>Incorrect Answer:</strong>  </p>

              </div>
            </div>
          </div>
        </div>

        <div class="card mb-3 col-md-6" style={{ maxWidth: "540px" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src={Test4} class="img-fluid rounded-start" alt="" />
            </div>
            {cresult.map(results =>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Reasoning Marks</h5>
                  <p><strong>Total Question:</strong> 10 </p>
                  <p><strong>Correct Answer:</strong> {results.user_cresult} </p>
                  <p><strong>Incorrect Answer:</strong> {results.user_wresult} </p>
                </div>
              </div>
            )};
          </div>
        </div>
      </div>

      <div class="row">
        <div class="card mb-3 col-md-6" style={{ maxWidth: "540px" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src={Test6} class="img-fluid rounded-start" alt="" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Verbal Marks</h5>
                <p><strong>Total Question:</strong> 10 </p>
                <p><strong>Correct Answer:</strong>  </p>
                <p><strong>Incorrect Answer:</strong>  </p>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-3 col-md-6" style={{ maxWidth: "540px" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src={Test5} class="img-fluid rounded-start" alt="" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">FIRO-B Marks</h5>
                <p><strong>Total Question:</strong> 10 </p>
                <p><strong>Correct Answer:</strong>  </p>
                <p><strong>Incorrect Answer:</strong>  </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Career Assistant
        </button>

        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Best possible option for your Career</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body" id="model">
                <h4>{renderElement()}</h4>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Understood</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}