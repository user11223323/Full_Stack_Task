import React from 'react'

export default function About({setShowAbout, ShowAbout}) {
    return (
        <div>
            <div className="popup" >
        <div className='popup-card' style={{hight: "400px"}} >
          <button className='btn-close'  onClick={()=>{setShowAbout(false)}}>X</button>
          <div className='card-main' style={{dir : "rtl"}}  >
          <h2 className='title-movie-card' style={{marginTop:"15px"}}>.קוראים לי עידו אהרוני, בן 23 נשוי + 1 ומתגורר ברחובות</h2>
          <h2 className='title-movie-card' >אני בוגר קורס פול סטאק במכללת ג'ון ברייס בהצטיינות.</h2>
          <h2 className='title-movie-card' >מיד לאחר הקורס לפני כחצי שנה התקבלתי למשרה מלאה בחברת תוכנה מוכרת במרכז הארץ לתפקיד מפתח צד לקוח ומיישם SharePoint</h2>
          <h2 className='title-movie-card' >במסגרת התפקיד שלי אני בונה לחברות פורטל פנים ארגוני בסביבת SharePoint ופיתוח תוך שימוש ב:</h2>
          <h2 className='title-movie-card' >HTML, CSS ,JS, JQUERY.</h2>
          <h2 className='title-movie-card' >במסגרת השירות הצבאי שלי הייתי חוקר במצ"ח ולאחר מכן חוקר ביחידה המרכזית לחקירות מיוחדות ולאחר מכן מפקד בקורס להכשרת חוקרים פליליים</h2>
          </div>
        </div>
      </div>
        </div>
    )
}
