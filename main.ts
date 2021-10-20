function vonal (balv: number, jobbv: number) {
    if (balv == 0 && jobbv == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 60)
    } else if (balv == 1 && jobbv == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 60)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    } else if (balv == 0 && jobbv == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 60)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 60)
    }
}
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 5) {
        maqueen.motorStop(maqueen.Motors.All)
    } else {
        vonal(maqueen.readPatrol(maqueen.Patrol.PatrolLeft), maqueen.readPatrol(maqueen.Patrol.PatrolRight))
    }
})
