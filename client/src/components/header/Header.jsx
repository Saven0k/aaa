import './style.css'


const Header = () => {
    return (
        <header className="header">
            <div className="ico">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="144" height="144" viewBox="0 0 48 48">
                    <path fill="#283593" d="M33.741,21.023c-0.146,0.008-0.296,0.021-0.451,0.041L32.5,19l-0.93,2.428c-0.16,0.043-0.319,0.086-0.484,0.134L30.5,20l-0.73,1.946c-0.161,0.047-0.324,0.092-0.489,0.139L28.5,20l-0.95,2.534c-0.031,0.007-0.061,0.014-0.091,0.021L26.5,20l-1,2.667L24.5,20l-1,2.667L22.5,20l-0.888,2.368C20.749,21.918,20,21.18,20,20c0-1.292,0.706-2.334,1.738-3.032L22.5,19l1-2.667l1,2.667l1-2.667l1,2.667l1-2.667l-0.03-0.081c0.019,0.003,0.038,0.006,0.057,0.009L27.5,16.333l1,2.667l0.906-2.415c0.067,0.011,0.134,0.022,0.201,0.033L30.5,19l0.805-2.148c0.123,0.013,0.258,0.021,0.385,0.033L32.5,19l0.774-2.021c0.158,0.005,0.31,0.012,0.473,0.014L34.5,19l0.778-2.074C38.307,16.569,39,15,39,15s-0.25-2-3-2c0,0-0.75-2-8-2c0,0-0.625-2-5-2c-0.408,0-1.049,0.009-1,0c-1.875,0-3.125-3-7-3c-1.063,0-2.725,0.595-4-2c0.409,3.063,1.935,5,4,5c0.917,0,1.762,0.55,2.439,1.18c-0.507,0.175-0.999,0.352-1.462,0.515c-2.959,1.047-4.828-1.766-6.187-2.454C9.372,8.029,8.734,8.022,8,8.026C6.352,8.033,4.221,8.093,3,6c0.759,3.663,2.61,4.654,5,5c2.716,0.392,1.088,3.081,5.765,3.081c-0.007,0.017,0.043,0.025,0.119,0.028C11.453,16.466,9.89,17,7,17c0,0,0.985,2.469,3.273,2.922C8.669,21.498,6,22,6,22s1.563,2,4,2c0,0,0,0-0.001,0.001c-0.002,0-0.003,0-0.004,0C7.648,26.31,5,27.055,5,27.055C6.583,28.542,7.646,29,9,29c-1.688,1.75-6,3-6,3s1.438,2,4,2c-2.125,1.688-5,2-5,2c2,3.542,8.083,1.917,8,6c7.833-3,5.833,2,13,2c0,0-1.438-1.563-2-4c2.375,0,3-1,3-1s-2.063-1.688-3-3c0,0,0,0,0,0c-0.045,0.001-0.084-0.01-0.128-0.011c0.044,0,0.083,0.012,0.128,0.011c0.836-0.02,2-0.25,3-1c0,0-1.431-1.043-1.872-3.002c-0.003,0-0.007-0.001-0.011-0.001C22.048,31.684,22,31.355,22,31c0-1.813,1-2,1-2c1.438,0,2.75,1.313,2,3c1.813,0,1.688-5,3-5s1,2,1,2c2.063,0,2.688-5,5-5c1.438,0,1.375,1.688,1,3c0.688-0.688,3-4,3-4s-1.043-1.257-2.665-1.773L34.5,19L33.741,21.023z"></path><path fill="#3f51b5" d="M21 36C21 36 21 36 21 36c-2.349.056-3.651-1.982-6-2-.836-.006-1.804.29-3 1 0 0 1.083-6-3-6-1.688 1.75-6 3-6 3s1.438 2 4 2c3.958 0 4 2.875 4 4 5.958-3.083 6.583 2 10 2 2.375 0 3-1 3-1S21.938 37.313 21 36zM28 15L27.5 16.333 28.5 19 29.5 16.333 29 15zM26 15L25 15 24 15 23 15 21 15 22.5 19 23.5 16.333 24.5 19 25.5 16.333 26.5 19 27.5 16.333 27 15zM32.5 19L31.3 22.133 30.5 20 29.5 22.667 28.5 20 27.5 22.667 26.5 20 25.5 22.667 24.5 20 23.5 22.667 22.5 20 21 24 23 24 24 24 25 24 26 24 27 24 28 24 29 24 30 24 32 24 31.594 22.917 33.031 22.917 33 23 36 23 34.5 19 33.511 21.639zM35.531 15c-.323.5-.823 1-1.531 1-.523 0-.939-.405-.983-.917h-1.048L32 15h-2l-.5 1.333 1 2.667.99-2.639L32.5 19l1.01-2.639L34.5 19l1.5-4H35.531z"></path><path fill="#5c6bc0" d="M24,35c0,0-1.431-1.043-1.873-3.002c-1.919,0-4.502-2.165-8.127,0.002c0,0,0.625-8-4.005-8C7.648,26.31,5,27.055,5,27.055C6.583,28.542,7.646,29,9,29c4.083,0,3,6,3,6c1.195-0.71,2.164-1.006,3-1c2.349,0.018,3.651,2.056,6.001,2C21.836,35.98,23,35.75,24,35z"></path><path fill="#283593" d="M44,14c0-2.235-1-4-1-4s3,2.012,3,5c0,1.62-0.724,4-6,4c-0.642,0-5,0-5,0s11.375-0.625,7-6C42.625,13,44,14,44,14z"></path><path fill="#7986cb" d="M25,16c2.5,0,4.875,1,9,1s5-2,5-2s-0.25-2-3-2c0,0-0.75-2-8-2c0,0-0.625-2-5-2c-0.408,0-1.049,0.009-1,0c-1.875,0-3.125-3-7-3c-1.063,0-2.725,0.595-4-2c0.409,3.063,1.935,5,4,5c0.917,0,1.762,0.55,2.439,1.18c-0.507,0.175-0.999,0.352-1.462,0.515c-2.959,1.047-4.828-1.766-6.187-2.454C9.372,8.029,8.734,8.022,8,8.026C6.352,8.033,4.221,8.093,3,6c0.759,3.663,2.61,4.654,5,5c2.716,0.392,1.088,3.081,5.765,3.081c-0.008,0.018,0.047,0.027,0.13,0.029C12.625,15.958,12.375,16.667,11,19c-1.313,2.313-5,3-5,3s1.563,2,4,2c0,0,0,0-0.001,0.001C14.624,24.006,14,32,14,32c3.618-2.163,6.199-0.01,8.117-0.002C22.048,31.684,22,31.355,22,31c0-1.813,1-2,1-2c1.438,0,2.75,1.313,2,3c1.813,0,1.688-5,3-5s1,2,1,2c2.063,0,2.688-5,5-5c1.438,0,1.375,1.688,1,3c0.688-0.688,3-4,3-4s-1.625-2-4-2s-6.063,2-10,2c-0.813,0-4-0.563-4-3S22.5,16,25,16z M34,14c0.552,0,2,0,2,0s-0.583,2-2,2c-0.552,0-1-0.448-1-1C33,14.448,33.448,14,34,14z M24,11c1.381,0,2,1,2,1s-0.373,1-2,1c-1.627,0-3-2-3-2S22.619,11,24,11z"></path><path fill="#9fa8da" d="M25,16c2.5,0,4.875,1,9,1s5-2,5-2s-0.25-2-3-2c0,0-0.75-2-8-2c0,0-0.625-2-5-2c-5.5,0-6.973,3.007-9,5c-2.5,2.458-4.063,3-7,3c0,0,1.188,3,4,3c6.042,0,4,9,4,9c4-2.125,4.292,0,8,0c2.75,0,3.688-2,5-2s3.688-3,6-3c1.438,0,4-1,4-1s-1.625-2-4-2s-6.063,2-10,2c-0.813,0-4-0.563-4-3S22.5,16,25,16z M34,14c0.552,0,2,0,2,0s-0.583,2-2,2c-0.552,0-1-0.448-1-1C33,14.448,33.448,14,34,14z M24,11c1.381,0,2,1,2,1s-0.373,1-2,1c-1.627,0-3-2-3-2S22.619,11,24,11z"></path>
                </svg>
            </div>
        </header>
    )
}

export default Header;