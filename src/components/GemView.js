import React, { Component } from 'react'
import { connect } from "react-redux";
import M from 'materialize-css/dist/js/materialize.min.js'
import { Link } from "react-router-dom";
//import FacebookProvider, { Comments } from 'react-facebook';

class GemView extends Component {

    componentDidMount() {
        M.Tabs.init(document.getElementsByClassName('tabs')[0], {
            swipeable: true,
            responsiveThreshold: window.innerWidth,
        });
        let car = document.getElementsByClassName('carousel-slider')[0];
        car.style.height = 'auto';
        car.style['min-height'] = (window.innerHeight*0.6 - 56)+'px';
    }

    render() {
        const { imageURL, title, description } = this.props
        return (
            <div>
                <div className='gem-pic'>
                    <img src={imageURL} alt="The gem" />
                    <h3 className='bottom-left'>{title}</h3>
                    <Link to='/' className='top-left white-text'>
                        <i class="material-icons white-text">arrow_back</i></Link>
                </div>
                <div className="tabs-container">
                    <ul id="tabs-swipe-demo" className="tabs">
                        <li className="tab"><a href="#description-tab">Description</a></li>
                        <li className="tab"><a className="active" href="#comments-tab">Comments</a></li>
                        <li className="tab"><a href="#test-swipe-3">Test 3</a></li>
                    </ul>
                    <div id="description-tab" className="blue">
                        <div className="tab-container">
                            {description}
                        </div>
                    </div>
                    <div id="comments-tab" className="red">

                        <div className="fb-comments" data-href={window.location.href} data-width={window.innerWidth} data-numposts="3"></div>

                    </div>
                    <div id="test-swipe-3" className="green">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, unde qui! Distinctio, enim rerum. Corrupti non sapiente minima explicabo adipisci dicta! Quis dolorum quasi voluptatum laudantium iste sapiente dolorem quas deserunt veniam officiis placeat maiores excepturi similique, sit doloremque id laboriosam obcaecati praesentium nulla distinctio ratione optio voluptatem! Repellat, minus perferendis eaque reprehenderit commodi quasi magni itaque quaerat illo iure placeat. Numquam facilis eum optio perspiciatis facere sequi, dignissimos nemo est sapiente maiores, consequuntur mollitia sit temporibus quibusdam eius omnis harum deserunt voluptas vitae labore doloribus veniam reiciendis! Tempora, ut, veniam error quia sit corrupti totam recusandae necessitatibus odio impedit natus quasi quaerat blanditiis! Velit maiores, illum animi eligendi dicta repellat vel qui cupiditate totam suscipit porro aliquam minima aperiam magni distinctio itaque facilis libero consequatur autem possimus deserunt numquam! Nesciunt facilis nobis inventore incidunt minus sit assumenda placeat quam quidem eligendi, illo, impedit quasi error blanditiis maiores fuga cum temporibus ab voluptates natus quisquam fugit hic? Sequi amet nesciunt est voluptates quisquam dicta harum quasi rerum reprehenderit deserunt facilis porro ipsam accusantium perferendis, placeat eveniet at libero cupiditate itaque asperiores illo! Impedit iusto nostrum ducimus excepturi! Architecto, consequuntur veritatis. Cum hic commodi qui enim obcaecati sequi iusto consectetur similique dicta magni? Blanditiis debitis molestias veritatis tempore commodi cumque voluptatum dolor rerum eos quia atque esse aspernatur, numquam consequatur nam corrupti? Amet dignissimos exercitationem voluptates harum distinctio necessitatibus, consectetur adipisci qui! Possimus at nulla, soluta laborum nihil labore eligendi quasi, dolor earum quo tempore voluptate consectetur. Molestiae, facilis. Rerum culpa repellat ex quam? Laudantium ipsum vitae optio ipsa iste repudiandae sint ipsam corporis nihil autem, numquam nesciunt animi dolor doloribus cupiditate non, velit et minima! Tempora, aliquam! Iure deleniti itaque libero, doloremque explicabo sapiente modi excepturi beatae. Molestiae voluptatem quas saepe accusantium nam. Dolorem ipsam quidem hic aut earum officiis blanditiis reiciendis. Non repellat velit ad dolor, repellendus ex incidunt praesentium earum voluptatem in officiis eum consequatur consequuntur pariatur ratione atque voluptate reiciendis, repudiandae amet. Quia fugit a adipisci rem aut officiis id vitae similique laborum culpa molestiae, dolorum quis quae aperiam accusamus ab, corporis, aspernatur doloribus expedita minus odit quo eligendi. Veniam aut rerum perspiciatis ullam magnam, repellendus hic minus quae libero eius laboriosam ex cumque inventore reiciendis ipsam similique a esse nobis, ipsum labore repudiandae molestias. Modi, corporis, impedit corrupti deserunt nisi voluptas dolorem nihil, excepturi aliquid delectus quae a! Pariatur, ea! Odio amet nam eaque? Reiciendis exercitationem vitae odit libero maxime nemo, quod tenetur minima fuga ipsa, voluptates maiores, modi illo? A cum earum ab nihil ipsa, iusto rerum explicabo eligendi veritatis amet optio, quaerat at, dicta nostrum vitae excepturi voluptate quibusdam debitis adipisci officiis. Beatae, fugit fugiat! Nobis nihil nostrum eaque ut voluptatem, autem sit fugiat tempore ducimus enim qui eos placeat atque necessitatibus expedita accusamus sapiente est sed blanditiis quae rem vel cumque consequatur? Dolore iure aperiam voluptate exercitationem ut officiis sint optio cumque odit harum expedita aliquam, facere voluptatum vero vitae veniam nam at ducimus quae accusantium autem sapiente! Deleniti, quis. Ipsa consectetur sunt temporibus, minus fuga odio, laborum nobis voluptatibus assumenda nemo in, dolores excepturi? Labore reiciendis provident voluptatem aperiam, neque repellat praesentium id sequi earum corporis vel ea laudantium modi temporibus magnam magni quos animi, officiis eligendi enim aut. Suscipit cumque laboriosam ea officiis, pariatur dicta ratione explicabo, molestias velit odio esse ipsum aliquam libero inventore deserunt sed? Veritatis accusantium cum iure architecto sint at, magnam repudiandae tenetur deserunt illum perferendis ratione qui deleniti dolor saepe doloribus quam expedita eum accusamus exercitationem animi molestiae est. Iste quasi vero omnis, consectetur nemo saepe, voluptate veniam provident ex quaerat vitae molestiae laudantium? Soluta voluptas ex praesentium facere. Quo similique et quos ad ab distinctio corporis facilis in? Quia est asperiores consectetur sunt. At saepe ipsa, doloremque recusandae minus nisi veniam nam laboriosam eaque necessitatibus pariatur? Dolor ab exercitationem id nulla temporibus facilis ipsum iusto quam repellendus magni consequatur quibusdam, expedita neque impedit, reiciendis consequuntur eveniet eligendi aliquam! Ab amet commodi pariatur doloremque quae illum numquam. Debitis et reprehenderit molestiae quas hic in eum ut distinctio quo. Quae cumque soluta impedit inventore delectus nam dignissimos. Ratione in odio a incidunt magnam maxime fugiat voluptate. Iste accusamus assumenda a accusantium mollitia officiis, veritatis quo dolores saepe perspiciatis ipsam voluptatem id obcaecati amet nulla blanditiis sequi molestias quis inventore odio? Iure possimus officiis in aut hic quis tenetur! Reiciendis voluptatum nobis quam facilis atque quos velit doloribus molestias ratione eius omnis ipsa, nulla voluptates tempora voluptate magnam ab iusto placeat repellendus quidem distinctio ipsum, autem vel quas! Facere, officiis similique inventore unde, possimus perferendis cumque alias, quaerat autem ipsa mollitia voluptatibus. Molestias deleniti illo eum! Voluptates hic repellat nobis voluptate quae eius eveniet laudantium ipsa cupiditate vero deleniti, earum inventore in veniam excepturi et saepe ab laborum asperiores assumenda quidem voluptatem sint tenetur soluta. Quasi blanditiis odit sint perferendis officia nostrum nobis aspernatur voluptate dignissimos, neque, expedita assumenda enim aliquam sed iure necessitatibus, pariatur animi. Consequatur odio ipsam vero fugiat, exercitationem eius quos voluptatem officiis eaque quod recusandae delectus numquam atque laboriosam esse minus ipsum ab saepe nemo modi quidem? Libero sit autem minus velit ad voluptas placeat rerum nesciunt optio error ab tempore consequuntur inventore ex temporibus modi quam esse iste, saepe, iure hic. Ullam quam repellendus eligendi perferendis blanditiis facilis culpa nostrum reprehenderit, saepe, voluptatibus error obcaecati sunt voluptatem ipsa deserunt atque! Officiis voluptates tenetur eius minima quae quidem reiciendis totam eaque nihil architecto maxime, obcaecati unde molestias dolores rerum doloremque magnam quis et quo! Dicta, eveniet. Blanditiis maxime sunt reprehenderit eaque, numquam hic quia? Voluptatem, maiores. Delectus, ullam! Veniam, ratione! Explicabo maxime optio aspernatur provident, eaque culpa saepe esse. Ea voluptatum consequatur alias impedit et ducimus minima eum numquam iste maxime aliquid nostrum aliquam culpa qui modi corporis quae, consequuntur tempore tempora soluta totam iusto? Blanditiis, voluptatum ipsum laboriosam accusantium quo perspiciatis dignissimos saepe corporis soluta quia ea unde, numquam harum fugiat omnis veniam nulla. Reprehenderit ducimus recusandae nemo vel, incidunt in modi voluptates mollitia ex, nobis accusamus. Laboriosam numquam autem vel sit earum!</div>
                </div>

            </div>
        )
    }
}


export default connect(state => ({
    imageURL: state.gemData.imageURL,
    title: state.gemData.title,
    description: state.gemData.description
}))(GemView)