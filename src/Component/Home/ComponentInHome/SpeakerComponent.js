import './ComponentInHome.css';

import speakerImgOne from '../../../Asset/SpeakerImg/speaker-1.png'

function SpeakerComponent() {
    return (
        <div className='speaker-component' id='#SpeakerComponent'>

            <div class="hexagon">
            </div>

            <div class="container overflow-hidden">
                <div class="row gx-5">
                    <h1 className='text-muted'>Speakers</h1>
                    <div class="col-lg-4">
                        <div className='row'>
                            <div className='col speaker-image'>
                                <img src={speakerImgOne} alt='speaker-1' className='img-fluid mt-5' />
                            </div>
                            <div className='col'>
                                <p>Obi Aika</p>
                                <p>Profession</p>
                                <p>Company</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="p-3 border bg-light">Custom column padding</div>
                    </div>
                    <div class="col-lg-4">
                        <div class="p-3 border bg-light">Custom column padding</div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SpeakerComponent;