# Generated by Django 4.0.4 on 2022-11-30 21:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('matches', '0005_match_number_of_rounds'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='match',
            name='fans_avrg_one',
        ),
        migrations.RemoveField(
            model_name='match',
            name='fans_avrg_two',
        ),
    ]
