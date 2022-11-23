import { Component, OnInit } from '@angular/core';
import { MemberService } from './member.service';
import { Member } from './Member';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class MembersComponent implements OnInit {
  members: Member[] = [];
  constructor(private memberService: MemberService) {}

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers() {
    this.memberService
      .getAllMembers()
      .subscribe((members) => (this.members = members));
  }
}
