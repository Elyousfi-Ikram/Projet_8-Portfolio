import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import langagesData from '../../datas/langages.json';
import frameworksData from '../../datas/frameworks.json';
import dataBasesData from '../../datas/dataBase.json';
import outilsData from '../../datas/outils.json';

type SkillItem = {
  icon: string | string[];
  langage?: string;
  framework?: string;
  dataBase?: string;
  outils?: string;
};

type SectionConfig = {
  title: string;
  iconClass: string;
  data: SkillItem[];
  key: 'langage' | 'framework' | 'dataBase' | 'outils';
};

@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss']
})
export class CompetencesComponent implements OnInit {
  @Input() competences: SkillItem[] = (langagesData as SkillItem[]) || [];
  @Input() frameworks: SkillItem[] = (frameworksData as SkillItem[]) || [];
  @Input() dataBases: SkillItem[] = (dataBasesData as SkillItem[]) || [];
  @Input() outils: SkillItem[] = (outilsData as SkillItem[]) || [];

  isVisible = false;

  sections: SectionConfig[] = [];

  ngOnInit(): void {
    this.sections = [
      { title: 'Langages',        iconClass: 'fas fa-code',     data: this.competences, key: 'langage' },
      { title: 'Frameworks',      iconClass: 'fas fa-cogs',     data: this.frameworks,  key: 'framework' },
      { title: 'Base de Données', iconClass: 'fas fa-database', data: this.dataBases,   key: 'dataBase' },
      { title: 'Outils utilisés', iconClass: 'fas fa-tools',    data: this.outils,      key: 'outils' }
    ];

    setTimeout(() => (this.isVisible = true), 0);
  }

  trackByIndex = (_: number, i: unknown) => i;

  // Supprime isArray: devenu inutile
  iconList(icon: string | string[]): string[] {
    return Array.isArray(icon) ? icon : [icon];
  }

  resolveIconPath(icon: string): string {
    const trimmed = (icon || '').trim();
    const normalized = trimmed.replace(/^\/asset\/icons\//, '/icons/');
    if (normalized.startsWith('/icons/') || normalized.startsWith('/assets/icons/')) return normalized;
    if (/^icons\//.test(trimmed)) return `/${trimmed}`;
    return `/icons/${trimmed.replace(/^\/?icons\//, '')}`;
  }
}