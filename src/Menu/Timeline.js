import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from "react";
import './css/index.css';

import {Icon,} from 'antd';

class Timeline extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    My Learning Timeline
                </h1>
                <VerticalTimeline>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2018. 04. 23."
                        iconStyle={{background: 'rgb(33, 150, 243)'}}
                        icon={<Icon type="codepen" style={{fontSize: 50, color: '#fff'}}/>}
                    >
                        <h2 className="vertical-timeline-element-title">Achievement</h2>
                        <h4 className="vertical-timeline-element-subtitle">Getting Started with Redux</h4>
                        <p><i>"In nomine patri et fili spiritu sancte . . ."</i></p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--publication"
                        date="2018. 04."
                        iconStyle={{background: '#1fab05', color: '#fff'}}
                        icon={<Icon type="book" style={{fontSize: 50, color: '#fff'}}/>}
                    >
                        <h2 className="vertical-timeline-element-title">Publikáció</h2>
                        <h4 className="vertical-timeline-element-subtitle">In: <i>Nevelj Jedit! – A képzelet
                            pedagógiája</i></h4>
                        <p><i>Elmék (h)arcai – Tanulás és műveltség a Star Wars és a Trónok harca világában</i></p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2018. 03. 12."
                        iconStyle={{background: 'rgb(33, 150, 243)'}}
                        icon={<Icon type="codepen" style={{fontSize: 50, color: '#fff'}}/>}
                    >
                        <h2 className="vertical-timeline-element-title">Achievement</h2>
                        <h4 className="vertical-timeline-element-subtitle">First Steps in React</h4>
                        <p><i>"WTF is happening??"</i></p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2017. 12. 13."
                        iconStyle={{background: 'rgb(33, 150, 243)'}}
                        icon={<Icon type="codepen" style={{fontSize: 50, color: '#fff'}}/>}
                    >
                        <h2 className="vertical-timeline-element-title">Achievement</h2>
                        <h4 className="vertical-timeline-element-subtitle">AJAX, GIT</h4>
                        <p><i>"U Wot M8?"</i></p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2017. 11. 10."
                        iconStyle={{background: 'rgb(33, 150, 243)'}}
                        icon={<Icon type="codepen" style={{fontSize: 50, color: '#fff'}}/>}
                    >
                        <h2 className="vertical-timeline-element-title">Achievement</h2>
                        <h4 className="vertical-timeline-element-subtitle">Hello, jQuery!</h4>
                        <p><i>"OK!"</i></p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--conference"
                        date="2017. 10"
                        iconStyle={{background: '#ff980b', color: '#fff'}}
                        icon={<Icon type="solution" style={{fontSize: 50, color: '#fff'}}/>}
                    >
                        <h2 className="vertical-timeline-element-title">Konferencia előadás</h2>
                        <h4 className="vertical-timeline-element-subtitle">AGTEDU 2017</h4>
                        <p><i>Nőalakok az epic fantasyben</i></p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2017. 08. 21."
                        iconStyle={{background: 'rgb(33, 150, 243)'}}
                        icon={<Icon type="codepen" style={{fontSize: 50, color: '#fff'}}/>}
                    >
                        <h2 className="vertical-timeline-element-title">Achievement</h2>
                        <h4 className="vertical-timeline-element-subtitle">Introducing JavaScript</h4>
                        <p><i>"OK?"</i></p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2017. 08. 10."
                        iconStyle={{background: 'rgb(33, 150, 243)'}}
                        icon={<Icon type="codepen" style={{fontSize: 50, color: '#fff'}}/>}
                    >
                        <h2 className="vertical-timeline-element-title">Achievement</h2>
                        <h4 className="vertical-timeline-element-subtitle">Getting Familiar with HTML and CSS</h4>
                        <p><i>"It's easy!"</i></p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2017. 07. 08. – present"
                        iconStyle={{background: 'rgb(33, 150, 243)'}}
                        icon={<Icon type="codepen" style={{fontSize: 50, color: '#fff'}}/>}
                    >
                        <h2 className="vertical-timeline-element-title">Storyboard designer</h2>
                        <h4 className="vertical-timeline-element-subtitle">Skyline-Computer Kft.</h4>
                        <p><i>"This is dog"</i></p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--conference"
                        date="2017. 05."
                        iconStyle={{background: '#ff980b', color: '#fff'}}
                        icon={<Icon type="solution" style={{fontSize: 50, color: '#fff'}}/>}
                    >
                        <h2 className="vertical-timeline-element-title">Konferencia előadás</h2>
                        <h4 className="vertical-timeline-element-subtitle">A fantázia (erő)terei tudományos konferencia
                            2017</h4>
                        <p><i>Tökéletesség, bukás, mítoszteremtés – az
                            orkok Tolkien világában (és azon kívül)</i></p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--publication"
                        date="2016. 11."
                        iconStyle={{background: '#1fab05', color: '#fff'}}
                        icon={<Icon type="book" style={{fontSize: 50, color: '#fff'}}/>}
                    >
                        <h2 className="vertical-timeline-element-title">Publikáció</h2>
                        <h4 className="vertical-timeline-element-subtitle">Gradus tudományos folyóirat 2017</h4>
                        <p><i>A Másodlagos Teremtés Kulturális háttere - A kezdetektől
                            Platónig</i></p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--conference"
                        date="2016. 10."
                        iconStyle={{background: '#ff980b', color: '#fff'}}
                        icon={<Icon type="solution" style={{fontSize: 50, color: '#fff'}}/>}
                    >
                        <h2 className="vertical-timeline-element-title">Konferencia előadás</h2>
                        <h4 className="vertical-timeline-element-subtitle">AGTEDU 2016</h4>
                        <p><i>A Másodlagos Teremtés Kulturális Háttere – A kezdetektől Platónig</i></p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2015. 09. 01. – 2017. 05. 31."
                        iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
                        icon={<Icon type="dingding" style={{fontSize: 50, color: '#fff'}}/>}
                    >
                        <h2 className="vertical-timeline-element-title"><strong>MA</strong> diploma: Okleveles
                            anglisztika mesterszakos bölcsész</h2>
                        <h4 className="vertical-timeline-element-subtitle">ELTE-BTK, Budapest (Magyarország)</h4>
                        <p><strong>Főbb tantárgyak</strong>: angol irodalom, gender kutatások, párhuzamok és interakciók
                            az
                            angol
                            irodalomban, filozófia
                            <br/>
                            <strong>Szakdolgozat</strong>: <i>The Rise of a Hero - An examination of a fallible hero / A
                                hős
                                ébredése – egy esendő
                                hős vizsgálata</i>
                            <br/>
                            <strong>Témavezető</strong>: Dr. Kállay Géza PhD, egyetemi tanár</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--publication"
                        date="2015. 11."
                        iconStyle={{background: '#1fab05', color: '#fff'}}
                        icon={<Icon type="book" style={{fontSize: 50, color: '#fff'}}/>}
                    >
                        <h2 className="vertical-timeline-element-title">Publikáció</h2>
                        <h4 className="vertical-timeline-element-subtitle">Pedagógiai műhely e-könyvtár 2016 Kecskemét
                            in: <i>Hallgatói kutatások: fókuszban az iskola</i></h4>
                        <p><i>A hős útja – egy esendő hős vizsgálata</i></p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--conference"
                        date="2015. 10."
                        iconStyle={{background: '#ff980b', color: '#fff'}}
                        icon={<Icon type="solution" style={{fontSize: 50, color: '#fff'}}/>}
                    >
                        <h2 className="vertical-timeline-element-title">Konferencia előadás</h2>
                        <h4 className="vertical-timeline-element-subtitle">AGTEDU 2015</h4>
                        <p><i>Tökéletesség, bukás, mítoszteremtés – az orkok Tolkien világában</i></p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--publication"
                        date="2015. 09."
                        iconStyle={{background: '#1fab05', color: '#fff'}}
                        icon={<Icon type="book" style={{fontSize: 50, color: '#fff'}}/>}
                    >
                        <h2 className="vertical-timeline-element-title">Publikáció</h2>
                        <h4 className="vertical-timeline-element-subtitle">Könyv és Nevelés XVII. évfolyam 2015/4.
                            szám</h4>
                        <p><i>Typologia phantastica. A fantasztikum
                            rendszertana II. rész</i></p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--publication"
                        date="2015. 06."
                        iconStyle={{background: '#1fab05', color: '#fff'}}
                        icon={<Icon type="book" style={{fontSize: 50, color: '#fff'}}/>}
                    >
                        <h2 className="vertical-timeline-element-title">Publikáció</h2>
                        <h4 className="vertical-timeline-element-subtitle">Könyv és Nevelés XVII. évfolyam 2015/3.
                            szám</h4>
                        <p><i>Typologia phantastica. A fantasztikum
                            rendszertana I. rész</i></p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--conference"
                        date="2015. 04."
                        iconStyle={{background: '#ff980b', color: '#fff'}}
                        icon={<Icon type="solution" style={{fontSize: 50, color: '#fff'}}/>}
                    >
                        <h2 className="vertical-timeline-element-title">Konferencia előadás</h2>
                        <h4 className="vertical-timeline-element-subtitle">XXXII. Országos Tudomány Diákköri Konferencia
                            2015</h4>
                        <p><i>The Rise of Hero - An examination of a
                            fallible hero</i></p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--conference"
                        date="2013. 09."
                        iconStyle={{background: '#ff980b', color: '#fff'}}
                        icon={<Icon type="solution" style={{fontSize: 50, color: '#fff'}}/>}
                    >
                        <h2 className="vertical-timeline-element-title">Konferencia előadás</h2>
                        <h4 className="vertical-timeline-element-subtitle">TÁMOP 4.1.2.B.2-13/1-2013-00007 "ORSZÁGOS
                            KOORDINÁCIÓVAL A PEDAGÓGUSKÉPZÉS
                            MEGÚJÍTÁSÁÉRT"</h4>
                        <p><i>The Rise of Hero - An examination of a fallible hero</i></p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--publication"
                        date="2013. 02."
                        iconStyle={{background: '#1fab05', color: '#fff'}}
                        icon={<Icon type="book" style={{fontSize: 50, color: '#fff'}}/>}
                    >
                        <h2 className="vertical-timeline-element-title">Publikáció</h2>
                        <h4 className="vertical-timeline-element-subtitle">Könyv és Nevelés XV. évfolyam 2013/2.
                            szám</h4>
                        <p><i>Aki újra visszavezet bennünket Fantáziába</i></p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--conference"
                        date="2013. 03."
                        iconStyle={{background: '#ff980b', color: '#fff'}}
                        icon={<Icon type="solution" style={{fontSize: 50, color: '#fff'}}/>}
                    >
                        <h2 className="vertical-timeline-element-title">Konferencia előadás</h2>
                        <h4 className="vertical-timeline-element-subtitle">XXXI. Országos Tudomány Diákköri
                            Konferencia</h4>
                        <p><i>Másodteremtés - Az újkori irodalmi
                            fantasy néhány világegyeteméről</i></p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2006. 09. 01. – 2015. 06. 30."
                        iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
                        icon={<Icon type="dingding" style={{fontSize: 50, color: '#fff'}}/>}
                    >
                        <h2 className="vertical-timeline-element-title"><strong>BA</strong> diploma: Tanító
                            (történelem-angol műveltségterület)</h2>
                        <h4 className="vertical-timeline-element-subtitle">Kecskeméti Főiskola, Tanítóképző Főiskolai
                            Kar,
                            Kecskemét (Magyarország)</h4>
                        <p><strong>Főbb tárgyak</strong>: pedagógia, pszichológia
                            <br/>
                            <strong>Szakdolgozat</strong>: <i>Másodteremtés - Az újkori irodalmi fantasy néhány
                                világegyeteméről</i>
                            <br/>
                            <strong>Témavezető</strong>: Dr. Galuska László Pál PhD, főiskolai docens</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2002. 09. 01. – 2006. 06. 30."
                        iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
                        icon={<Icon type="dingding" style={{fontSize: 50, color: '#fff'}}/>}
                    >
                        <h2 className="vertical-timeline-element-title">Középiskola</h2>
                        <h4 className="vertical-timeline-element-subtitle">Kandó Kálmán Szakközépiskola és Szakiskola,
                            Kecskemét (Magyarország)</h4>
                        <p>Érettségi</p>
                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
        )
    }
}

export default Timeline;