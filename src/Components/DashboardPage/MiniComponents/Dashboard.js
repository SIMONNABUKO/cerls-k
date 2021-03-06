import React from 'react';
import '../../../dashboard.css';

function Dashboard(props) {
  return (
    <div class='container emp-profile'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div class='container'>
        <div class='row my-2'>
          <div class='col-lg-8 order-lg-2'>
            <ul class='nav nav-tabs'>
              <li class='nav-item'>
                <a
                  href=''
                  data-target='#profile'
                  data-toggle='tab'
                  class='nav-link active'
                >
                  Profile
                </a>
              </li>
              <li class='nav-item'>
                <a
                  href=''
                  data-target='#messages'
                  data-toggle='tab'
                  class='nav-link'
                >
                  Messages
                </a>
              </li>
              <li class='nav-item'>
                <a
                  href=''
                  data-target='#edit'
                  data-toggle='tab'
                  class='nav-link'
                >
                  Edit
                </a>
              </li>
            </ul>
            <div class='tab-content py-4'>
              <div class='tab-pane active' id='profile'>
                <h5 class='mb-3'>User Profile</h5>
                <div class='row'>
                  <div class='col-md-6'>
                    <h6 style={{ color: '#ab0044' }}>Name</h6>
                    <p>{props.state.currentUser.name}</p>
                    <h6 style={{ color: '#ab0044' }}>Phone</h6>
                    <p>{props.state.currentUser.phone}</p>
                    <h6 style={{ color: '#ab0044' }}>Country</h6>
                    <p>Kenya</p>
                    <h6 style={{ color: '#ab0044' }}>Email</h6>
                    <p>{props.state.currentUser.email}</p>
                  </div>
                  {/* <div class='col-md-6'>
                    <h6>Recent badges</h6>
                    <br />
                    <a href='#' class='badge badge-dark badge-pill'>
                      html5
                    </a>
                    <a href='#' class='badge badge-dark badge-pill'>
                      react
                    </a>
                    <a href='#' class='badge badge-dark badge-pill'>
                      codeply
                    </a>
                    <a href='#' class='badge badge-dark badge-pill'>
                      angularjs
                    </a>
                    <a href='#' class='badge badge-dark badge-pill'>
                      css3
                    </a>
                    <a href='#' class='badge badge-dark badge-pill'>
                      jquery
                    </a>
                    <a href='#' class='badge badge-dark badge-pill'>
                      bootstrap
                    </a>
                    <a href='#' class='badge badge-dark badge-pill'>
                      responsive-design
                    </a>
                    <hr />
                    <span class='badge badge-primary'>
                      <i class='fa fa-user'></i> 900 Followers
                    </span>
                    <span class='badge badge-success'>
                      <i class='fa fa-cog'></i> 43 Forks
                    </span>
                    <span class='badge badge-danger'>
                      <i class='fa fa-eye'></i> 245 Views
                    </span>
                  </div> */}
                  <div class='col-md-12'>
                    <h5 class='mt-2'>
                      <span class='fa fa-clock-o ion-clock float-right'></span>{' '}
                      Upcoming Events
                    </h5>
                    <table
                      class='table table-sm table-hover table-striped'
                      style={{ color: '#000' }}
                    >
                      <tbody>
                        <tr>
                          <td>
                            Fleet Operations and Road Safety Management
                            Training(upcoming-26th - 27th March 2020){' '}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Impact of Logistics in manufacturing Industry
                            Training
                          </td>
                        </tr>
                        <tr>
                          <td>Retail Logistics Training</td>
                        </tr>
                        <tr>
                          <td>
                            Cost Reduction in Warehousing, Inventory, MNGT and
                            Distribution
                          </td>
                        </tr>
                        <tr>
                          <td>Kenya Logistics Summit and Expo 2020</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class='tab-pane' id='messages'>
                <div class='alert alert-info alert-dismissable'>
                  <a class='panel-close close' data-dismiss='alert'>
                    ×
                  </a>{' '}
                  You have no message for now
                </div>
                {/* <table
                  class='table table-hover table-striped'
                  style={{ color: '#000' }}
                >
                  <tbody>
                    <tr>
                      <td>
                        <span class='float-right font-weight-bold'>
                          3 hrs ago
                        </span>{' '}
                        Here is your a link to the latest summary report from
                        the..
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span class='float-right font-weight-bold'>
                          Yesterday
                        </span>{' '}
                        There has been a request on your account since that
                        was..
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span class='float-right font-weight-bold'>9/10</span>{' '}
                        Porttitor vitae ultrices quis, dapibus id dolor. Morbi
                        venenatis lacinia rhoncus.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span class='float-right font-weight-bold'>9/4</span>{' '}
                        Vestibulum tincidunt ullamcorper eros eget luctus.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span class='float-right font-weight-bold'>9/4</span>{' '}
                        Maxamillion ais the fix for tibulum tincidunt
                        ullamcorper eros.
                      </td>
                    </tr>
                  </tbody>
                </table> */}
              </div>
              <div class='tab-pane' id='edit'>
                <form role='form'>
                  <div class='form-group row'>
                    <label class='col-lg-3 col-form-label form-control-label'>
                      First name
                    </label>
                    <div class='col-lg-9'>
                      <input class='form-control' type='text' value='Jane' />
                    </div>
                  </div>
                  <div class='form-group row'>
                    <label class='col-lg-3 col-form-label form-control-label'>
                      Last name
                    </label>
                    <div class='col-lg-9'>
                      <input class='form-control' type='text' value='' />
                    </div>
                  </div>
                  <div class='form-group row'>
                    <label class='col-lg-3 col-form-label form-control-label'>
                      Email
                    </label>
                    <div class='col-lg-9'>
                      <input
                        class='form-control'
                        type='email'
                        value='email@gmail.com'
                      />
                    </div>
                  </div>
                  <div class='form-group row'>
                    <label class='col-lg-3 col-form-label form-control-label'>
                      Company
                    </label>
                    <div class='col-lg-9'>
                      <input class='form-control' type='text' value='' />
                    </div>
                  </div>
                  <div class='form-group row'>
                    <label class='col-lg-3 col-form-label form-control-label'>
                      Website
                    </label>
                    <div class='col-lg-9'>
                      <input class='form-control' type='url' value='' />
                    </div>
                  </div>
                  <div class='form-group row'>
                    <label class='col-lg-3 col-form-label form-control-label'>
                      Address
                    </label>
                    <div class='col-lg-9'>
                      <input
                        class='form-control'
                        type='text'
                        value=''
                        placeholder='Street'
                      />
                    </div>
                  </div>
                  <div class='form-group row'>
                    <label class='col-lg-3 col-form-label form-control-label'></label>
                    <div class='col-lg-6'>
                      <input
                        class='form-control'
                        type='text'
                        value=''
                        placeholder='City'
                      />
                    </div>
                    <div class='col-lg-3'>
                      <input
                        class='form-control'
                        type='text'
                        value=''
                        placeholder='State'
                      />
                    </div>
                  </div>
                  <div class='form-group row'>
                    <label class='col-lg-3 col-form-label form-control-label'>
                      Time Zone
                    </label>
                    <div class='col-lg-9'>
                      <select id='user_time_zone' class='form-control' size='0'>
                        <option value='Hawaii'>(GMT-10:00) Hawaii</option>
                        <option value='Alaska'>(GMT-09:00) Alaska</option>
                        <option value='Pacific Time (US &amp; Canada)'>
                          (GMT-08:00) Pacific Time (US &amp; Canada)
                        </option>
                        <option value='Arizona'>(GMT-07:00) Arizona</option>
                        <option value='Mountain Time (US &amp; Canada)'>
                          (GMT-07:00) Mountain Time (US &amp; Canada)
                        </option>
                        <option value='Nairobi-Kenya' selected='selected'>
                          (GMT-06:00) Central Time (US &amp; Canada)
                        </option>
                        <option value='Eastern Time (US &amp; Canada)'>
                          (GMT-05:00) Eastern Time (US &amp; Canada)
                        </option>
                        <option value='Indiana (East)'>
                          (GMT-05:00) Indiana (East)
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class='form-group row'>
                    <label class='col-lg-3 col-form-label form-control-label'>
                      Username
                    </label>
                    <div class='col-lg-9'>
                      <input
                        class='form-control'
                        type='text'
                        value='CeRLS User'
                      />
                    </div>
                  </div>
                  <div class='form-group row'>
                    <label class='col-lg-3 col-form-label form-control-label'>
                      Password
                    </label>
                    <div class='col-lg-9'>
                      <input
                        class='form-control'
                        type='password'
                        value='11111122333'
                      />
                    </div>
                  </div>
                  <div class='form-group row'>
                    <label class='col-lg-3 col-form-label form-control-label'>
                      Confirm password
                    </label>
                    <div class='col-lg-9'>
                      <input
                        class='form-control'
                        type='password'
                        value='11111122333'
                      />
                    </div>
                  </div>
                  <div class='form-group row'>
                    <label class='col-lg-3 col-form-label form-control-label'></label>
                    <div class='col-lg-9'>
                      <input
                        type='reset'
                        class='btn btn-secondary'
                        value='Cancel'
                      />
                      <input
                        type='button'
                        class='btn btn-primary'
                        value='Save Changes'
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class='col-lg-4 order-lg-1 text-center'>
            <img
              src={props.state.currentUser.image}
              class='mx-auto img-fluid img-circle d-block'
              alt='avatar'
              width='250'
              height='250'
            />
            <h6 class='mt-2'>Upload a different photo</h6>
            <label class='custom-file'>
              <input type='file' id='file' class='custom-file-input' />
              <span class='custom-file-control'>Choose file</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
