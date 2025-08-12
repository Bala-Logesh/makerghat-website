import "../styles/landing.css"

function LandingGrid() {
    return (
        <div class="grid-container">
            <div class="left"></div>
            <div class="center-1"></div>
            <div className="center-2">
                <div class="ar">Annual Reports</div>
                <div class="pr">Program Reports</div>
                <div class="cs">Case Studies</div>
                <div class="ct">Curriculum by Theme</div>
                <div class="cg">Curriculum by Grade</div>
            </div>
            <div class="right-1"></div>
            <div class="right-2"></div>
        </div>
    )
}

export default LandingGrid