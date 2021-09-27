import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from 'src/app/store';
import { ADDNOTES } from 'src/app/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private ngRedux: NgRedux<IAppState>) { }

  public newNoteText: string;
  // @select('notesList') notes;
  public notes = [
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quas.'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, facilis deleniti. Similique minus ullam quam accusamus vitae. Itaque blanditiis, rem, necessitatibus optio eum nihil consectetur natus, dolor reprehenderit quaerat praesentium.'
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem minus reiciendis praesentium illo eaque quas mollitia? Est suscipit corrupti nesciunt ratione qui fugit hic rem quaerat veritatis quas. Quaerat officiis magni sunt unde omnis ipsam maxime, qui, ratione voluptatibus dolores nemo eos, suscipit laudantium minus sapiente molestias harum ducimus deserunt.'
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nesciunt facere delectus accusantium, dicta illo porro officia odit corporis et repellat architecto eaque reiciendis maxime veniam in nostrum tempora officiis laboriosam modi rem aspernatur. Quos aliquid similique inventore iure? Cupiditate adipisci fugit officiis ratione veniam nihil, perferendis omnis, rerum, ducimus illo sapiente minus atque quo consectetur alias natus sequi accusamus ea. Consequuntur officia quae exercitationem asperiores dolorem in reiciendis minus.'
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquam inventore placeat. Impedit provident neque, consectetur assumenda fuga aliquid dolores fugit unde atque sequi autem velit quo? Repudiandae consequuntur reprehenderit saepe cum dolores. Necessitatibus ab similique voluptatem doloremque iste rem inventore laboriosam, sit deserunt dignissimos, repellat saepe eaque sapiente aliquam explicabo? Officia, sequi totam amet aut minima aliquid vero quisquam quia nobis, ea rem velit asperiores repellendus magnam nulla est accusantium sint illo harum, earum consequatur delectus laborum? Provident nulla vitae quaerat rerum aliquam repellat necessitatibus illo consequuntur dignissimos natus.'
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, illum vel natus, velit vitae nisi et beatae, iure perferendis deserunt ipsam vero aspernatur suscipit. Nesciunt, natus nihil cum possimus modi deleniti porro sit, voluptates iste quidem, tempora recusandae quasi blanditiis odio adipisci delectus dolores assumenda aut illum. Odit esse veritatis quae adipisci expedita ipsum ea eos aut dolorum ab fugiat voluptates sunt, maxime voluptatem consectetur. Quibusdam quae officia natus eum nemo possimus non? Mollitia doloribus consequatur officia sapiente fugiat illo, consectetur recusandae eum dolorem labore ut. Eveniet, alias laboriosam? Debitis corrupti voluptatibus, necessitatibus sint rem porro facere, numquam iure eum modi dolorum dolores nobis consequuntur rerum, id natus delectus voluptates fuga reprehenderit ducimus cum amet deleniti quia esse? Molestias, molestiae!'
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quas.'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, facilis deleniti. Similique minus ullam quam accusamus vitae. Itaque blanditiis, rem, necessitatibus optio eum nihil consectetur natus, dolor reprehenderit quaerat praesentium.'
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem minus reiciendis praesentium illo eaque quas mollitia? Est suscipit corrupti nesciunt ratione qui fugit hic rem quaerat veritatis quas. Quaerat officiis magni sunt unde omnis ipsam maxime, qui, ratione voluptatibus dolores nemo eos, suscipit laudantium minus sapiente molestias harum ducimus deserunt.'
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nesciunt facere delectus accusantium, dicta illo porro officia odit corporis et repellat architecto eaque reiciendis maxime veniam in nostrum tempora officiis laboriosam modi rem aspernatur. Quos aliquid similique inventore iure? Cupiditate adipisci fugit officiis ratione veniam nihil, perferendis omnis, rerum, ducimus illo sapiente minus atque quo consectetur alias natus sequi accusamus ea. Consequuntur officia quae exercitationem asperiores dolorem in reiciendis minus.'
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquam inventore placeat. Impedit provident neque, consectetur assumenda fuga aliquid dolores fugit unde atque sequi autem velit quo? Repudiandae consequuntur reprehenderit saepe cum dolores. Necessitatibus ab similique voluptatem doloremque iste rem inventore laboriosam, sit deserunt dignissimos, repellat saepe eaque sapiente aliquam explicabo? Officia, sequi totam amet aut minima aliquid vero quisquam quia nobis, ea rem velit asperiores repellendus magnam nulla est accusantium sint illo harum, earum consequatur delectus laborum? Provident nulla vitae quaerat rerum aliquam repellat necessitatibus illo consequuntur dignissimos natus.'
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, illum vel natus, velit vitae nisi et beatae, iure perferendis deserunt ipsam vero aspernatur suscipit. Nesciunt, natus nihil cum possimus modi deleniti porro sit, voluptates iste quidem, tempora recusandae quasi blanditiis odio adipisci delectus dolores assumenda aut illum. Odit esse veritatis quae adipisci expedita ipsum ea eos aut dolorum ab fugiat voluptates sunt, maxime voluptatem consectetur. Quibusdam quae officia natus eum nemo possimus non? Mollitia doloribus consequatur officia sapiente fugiat illo, consectetur recusandae eum dolorem labore ut. Eveniet, alias laboriosam? Debitis corrupti voluptatibus, necessitatibus sint rem porro facere, numquam iure eum modi dolorum dolores nobis consequuntur rerum, id natus delectus voluptates fuga reprehenderit ducimus cum amet deleniti quia esse? Molestias, molestiae!'
    }
  ];

  ngOnInit(): void {
  }

  saveNote = () => {
    this.ngRedux.dispatch({ type: ADDNOTES, payload: { title: '', text: this.newNoteText } })
  }

}
